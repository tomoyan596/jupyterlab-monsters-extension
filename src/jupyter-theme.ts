import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application'

import { IThemeManager } from '@jupyterlab/apputils'
import { ITranslator, nullTranslator } from '@jupyterlab/translation'
import { ISettingRegistry } from '@jupyterlab/settingregistry'

const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:jupyter_theme'

/**
 * Added JupyterJab theme to jupyter-tomoyan-extension extension.
 */
export const pluginJupyterTheme: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager, ITranslator],
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, manager: IThemeManager, translator: ITranslator, settingRegistry: ISettingRegistry | null) => {
    console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`)

    const style = '@tomoyan596/jupyterlab-monsters-extension/index.css'
    const trans = (translator ?? nullTranslator).load('jupyterlab')

    manager.register({
      name: 'Tomoyan\'s Dark Royal Blue',
      displayName: trans.__('Tomoyan\'s Dark Royal Blue'),
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    })

    if (settingRegistry) {
      settingRegistry
        .load(pluginJupyterTheme.id)
        .then(settings => {
          console.log('jupyterlab-monster-extension settings loaded:', settings.composite)
        })
        .catch(reason => {
          console.error('Failed to load settings for jupyterlab-monster-extension.', reason)
        })
    }

  }
}
