import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application'

import { IEditorLanguageRegistry } from '@jupyterlab/codemirror'
import { ITranslator, nullTranslator } from '@jupyterlab/translation'

const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:editor_language'

/*
 * Added CodeMirror language definition to the jupyter-tomoyan-extension extension.
 *
 * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorLanguageRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L45
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
export const pluginEditorLanguage: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IEditorLanguageRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, languages: IEditorLanguageRegistry, translator: ITranslator) => {
    console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`)

    const trans = (translator ?? nullTranslator).load('jupyterlab')

    for (const language of [
      {
        name: 'Astro',
        displayName: trans.__('Astro'),
        alias: ['astro'],
        mime: 'text/astro-jsx',
        extensions: ['astro'],
        async load() {
          const m = await import('@codemirror/lang-javascript')
          return m.javascript({ jsx: true, typescript: true })
        }
      },
      {
        name: 'JSONC',
        displayName: trans.__('JSONC'),
        alias: ['json5'],
        mime: ['application/jsonc', 'application/x-jsonc'],
        extensions: ['jsonc', 'map'],
        async load() {
          const m = await import('@codemirror/lang-json')
          return m.json()
        }
      }
    ]) {
      languages.addLanguage(language)
    }
    console.log('languages:')
    console.log(languages)
  }
}
