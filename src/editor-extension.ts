import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application'

import { IEditorExtensionRegistry, EditorExtensionRegistry } from '@jupyterlab/codemirror'
import { ITranslator, nullTranslator } from '@jupyterlab/translation'

import { Extension, Facet, combineConfig } from '@codemirror/state'
import { EditorView } from '@codemirror/view'

const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:editor_extension'

/**
 * Editor customizable styles
 */
export type CustomTheme = {
  /**
   * Font family
   */
  fontFamily: string | null
  /**
   * Font size
   */
  fontSize: number | null
  /**
   * Line height
   */
  lineHeight: number | null
  /**
   * Letter Spacing
   */
  letterSpacing: string | null
}

const customThemeConfig = Facet.define<CustomTheme, CustomTheme>({
  combine(configs: readonly CustomTheme[]) {
    return combineConfig(
      configs,
      {
        fontFamily: null,
        fontSize: null,
        lineHeight: null,
        letterSpacing: null
      },
      {
        fontFamily: (a, b) => a ?? b,
        fontSize: (a, b) => a ?? b,
        lineHeight: (a, b) => a ?? b,
        letterSpacing: (a, b) => a ?? b
      }
    )
  }
})
function setEditorStyle(view: EditorView): Record<string, string> | null {
  const { fontFamily, fontSize, lineHeight, letterSpacing } =
    view.state.facet(customThemeConfig)

  let style = ''
  if (fontSize) {
    style += `font-size: ${fontSize}px !important;`
  }
  if (fontFamily) {
    style += `font-family: ${fontFamily} !important;`
  }
  if (lineHeight) {
    style += `line-height: ${lineHeight.toString()} !important`
  }
  if (letterSpacing) {
    style += `line-height: ${letterSpacing} !important`
  }

  return { style: style }
}

export function customTheme(config: CustomTheme): Extension {
  return [
    customThemeConfig.of(config),
    EditorView.editorAttributes.of(setEditorStyle),
    EditorView.theme({
      '.cm-scroller': {
        fontFamily: "{config.letterSpacing}"
      }
    })
  ]
}

/**
 * Added CodeMirror theme for jupyter-tomoyan-extension extension.
 *
  * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
export const pluginEditorExtension: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IEditorExtensionRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, extensions: IEditorExtensionRegistry, translator: ITranslator) => {
    console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`)

    const trans = (translator ?? nullTranslator).load('jupyterlab')

    extensions.addExtension({
      name: 'customStyles1',
      factory: () =>
        EditorExtensionRegistry.createConfigurableExtension<CustomTheme>(config =>
          customTheme(config)
        ),
      default: {
        fontFamily: null,
        fontSize: null,
        lineHeight: null,
        letterSpacing: null
      },
      schema: {
        title: trans.__('Custom editor styles'),
        type: 'object',
        properties: {
          fontFamily: {
            type: ['string', 'null'],
            title: trans.__('Font Family')
          },
          fontSize: {
            type: ['number', 'null'],
            minimum: 1,
            maximum: 100,
            title: trans.__('Font Size')
          },
          lineHeight: {
            type: ['number', 'null'],
            title: trans.__('Line Height')
          },
          letterSpacing: {
            type: ['number', 'null'],
            title: trans.__('Letter Spacing')
          }
        },
        additionalProperties: true
      }
    })

    console.log('extensions:')
    console.log(extensions)

  }
}