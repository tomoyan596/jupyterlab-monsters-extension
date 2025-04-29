import { JupyterFrontEndPlugin } from '@jupyterlab/application';

import { pluginJupyterTheme } from './jupyter-theme';
import { pluginEditorTheme } from './editor-theme';
import { pluginEditorLanguage } from './editor-language';
import { pluginEditorExtension } from './editor-extension';

//export * from './extensions'

/**
 * Initialization data for the jupyter_tomoyan_extension extension.
 *
 * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
 */
const plugins: JupyterFrontEndPlugin<void>[] = [
  pluginJupyterTheme,
  pluginEditorTheme,
  pluginEditorLanguage,
  pluginEditorExtension
];

export default plugins;
