import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application'

import { IEditorThemeRegistry } from '@jupyterlab/codemirror'
import { ITranslator, nullTranslator } from '@jupyterlab/translation'

import * as CMThemes from '@fsegurai/codemirror-theme-bundle'
import { dark_blue_monokai } from './dark-blue-monokai'

const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:editor_theme'

/**
 * Added CodeMirror theme for jupyter-tomoyan-extension extension.
 *
 * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
 */
export const pluginEditorTheme: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IEditorThemeRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, themes: IEditorThemeRegistry, translator: ITranslator) => {
    console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`)

    const trans = (translator ?? nullTranslator).load('jupyterlab')

    themes.addTheme({
      name: 'Tomoyan\'s dark royal blue monokai',
      displayName: trans.__('Tomoyan\'s dark royal blue monokai'),
      theme: dark_blue_monokai
    })

    for (const [name, cm_theme] of Object.entries(CMThemes)) {
      themes.addTheme({
        name: name,
        displayName: trans.__(name),
        theme: cm_theme
      })
    }
  }
}

/**
 *
 * reference:
 *   https://medium.com/@techsolutionsx/converting-rgba-to-hex-in-javascript-a-comprehensive-guide-908fbb1d13cf
 *
 */
export const rgbaToHex = (colorStr: string, forceRemoveAlpha: boolean = false) => {
  // Check if the input string contains '/'
  const hasSlash = colorStr.includes('/')

  if (hasSlash) {
    // Extract the RGBA values from the input string
    const rgbaValues = colorStr.match(/(\d+)\s+(\d+)\s+(\d+)\s+\/\s+([\d.]+)/)

    if (!rgbaValues) {
      return colorStr // Return the original string if it doesn't match the expected format
    }

    const [red, green, blue, alpha] = rgbaValues.slice(1, 5).map(parseFloat)

    // Convert the RGB values to hexadecimal format
    const redHex = red.toString(16).padStart(2, '0')
    const greenHex = green.toString(16).padStart(2, '0')
    const blueHex = blue.toString(16).padStart(2, '0')

    // Convert alpha to a hexadecimal format (assuming it's already a decimal value in the range [0, 1])
    const alphaHex = forceRemoveAlpha
      ? ''
      : Math.round(alpha * 255)
          .toString(16)
          .padStart(2, '0')

    // Combine the hexadecimal values to form the final hex color string
    const hexColor = `#${redHex}${greenHex}${blueHex}${alphaHex}`

    return hexColor
  } else {
    // Use the second code block for the case when '/' is not present
    return (
      '#' +
      colorStr
        .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
        .split(',') // splits them at ","
        .filter((string, index) => !forceRemoveAlpha || index !== 3)
        .map(string => parseFloat(string)) // Converts them to numbers
        .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
        .map(number => number.toString(16)) // Converts numbers to hex
        .map(string => (string.length === 1 ? '0' + string : string)) // Adds 0 when length of one number is 1
        .join('')
    )
  }
}
