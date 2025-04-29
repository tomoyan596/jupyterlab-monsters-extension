import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { ITranslator } from '@jupyterlab/translation';
import { ISettingRegistry } from '@jupyterlab/settingregistry';

const EXTENSION_ID = '@tomoyan596/jupyterlab-monsters-extension';
const PLUGIN_ID = `${EXTENSION_ID}:jupyter-theme`;
const SETTINGS_ID = `${PLUGIN_ID}`;

/**
 * Added JupyterJab theme to jupyter-tomoyan-extension extension.
 */
export const pluginJupyterTheme: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager, ITranslator, ISettingRegistry],
  activate: async (
    app: JupyterFrontEnd,
    manager: IThemeManager,
    translator: ITranslator,
    settings: ISettingRegistry
  ) => {
    console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`);

    const style = `${EXTENSION_ID}/index.css`;
    const trans = translator.load('jupyterlab');
    const setting = await settings.load(SETTINGS_ID);

    manager.register({
      name: "Monster's Dark Royal Blue",
      displayName: trans.__("Monster's Dark Royal Blue"),
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });

    console.log(setting.get('backgroundImage'));
  }
};
