
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_repository: string;
	export const COREPACK_ROOT: string;
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_homepage: string;
	export const NVM_CD_FLAGS: string;
	export const ANDROID_HOME: string;
	export const npm_package_devDependencies_vite: string;
	export const TERM: string;
	export const SHELL: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_metrics_registry: string;
	export const CONDA_SHLVL: string;
	export const GRADLE_HOME: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const FIG_NEW_SESSION: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_exports___svelte: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_config_noproxy: string;
	export const POWERLINE_COMMAND: string;
	export const PNPM_HOME: string;
	export const LC_ALL: string;
	export const npm_config_local_prefix: string;
	export const npm_package_description: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const CONDA_EXE: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_author_name: string;
	export const _CE_CONDA: string;
	export const npm_config_access: string;
	export const PATH: string;
	export const npm_config_engine_strict: string;
	export const npm_package_json: string;
	export const npm_config_auto_install_peers: string;
	export const npm_package_keywords_4: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const npm_command: string;
	export const npm_package_keywords_5: string;
	export const PWD: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_author_url: string;
	export const npm_package_keywords_6: string;
	export const JAVA_HOME: string;
	export const npm_lifecycle_event: string;
	export const npm_package_keywords_7: string;
	export const EDITOR: string;
	export const npm_package_types: string;
	export const npm_package_svelte: string;
	export const npm_package_keywords_0: string;
	export const npm_package_name: string;
	export const POSH_SHELL_VERSION: string;
	export const LANG: string;
	export const npm_config_resolution_mode: string;
	export const npm_package_keywords_1: string;
	export const SDKMAN_VERSION: string;
	export const NODE_PATH: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_exports___types: string;
	export const npm_package_scripts_build: string;
	export const npm_package_keywords_2: string;
	export const npm_package_keywords_3: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_keywords_8: string;
	export const npm_package_type: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const LANGUAGE: string;
	export const HOMEBREW_PREFIX: string;
	export const PROMPT: string;
	export const CONDA_PYTHON_EXE: string;
	export const POSH_PROMPT_COUNT: string;
	export const LOGNAME: string;
	export const npm_config_cache: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const SDKMAN_DIR: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_package_scripts_package: string;
	export const CONDA_DEFAULT_ENV: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const BROWSER: string;
	export const TERMINAL: string;
	export const npm_package_files_2: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_files_1: string;
	export const npm_package_files_0: string;
	export const POSH_PID: string;
	export const POSH_THEME: string;
	export const npm_package_scripts_check: string;
	export const npm_node_execpath: string;
	export const COLORTERM: string;
	export const npm_config_prefix: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_repository: string;
		COREPACK_ROOT: string;
		MANPATH: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		npm_package_devDependencies_typescript: string;
		npm_package_homepage: string;
		NVM_CD_FLAGS: string;
		ANDROID_HOME: string;
		npm_package_devDependencies_vite: string;
		TERM: string;
		SHELL: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_metrics_registry: string;
		CONDA_SHLVL: string;
		GRADLE_HOME: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		CONDA_PROMPT_MODIFIER: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_prepublishOnly: string;
		FIG_NEW_SESSION: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_exports___svelte: string;
		SDKMAN_PLATFORM: string;
		npm_config_noproxy: string;
		POWERLINE_COMMAND: string;
		PNPM_HOME: string;
		LC_ALL: string;
		npm_config_local_prefix: string;
		npm_package_description: string;
		NVM_DIR: string;
		USER: string;
		npm_package_scripts_check_watch: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		CONDA_EXE: string;
		SDKMAN_CANDIDATES_API: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		npm_package_author_name: string;
		_CE_CONDA: string;
		npm_config_access: string;
		PATH: string;
		npm_config_engine_strict: string;
		npm_package_json: string;
		npm_config_auto_install_peers: string;
		npm_package_keywords_4: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		npm_command: string;
		npm_package_keywords_5: string;
		PWD: string;
		npm_package_devDependencies_publint: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_scripts_preview: string;
		npm_package_author_url: string;
		npm_package_keywords_6: string;
		JAVA_HOME: string;
		npm_lifecycle_event: string;
		npm_package_keywords_7: string;
		EDITOR: string;
		npm_package_types: string;
		npm_package_svelte: string;
		npm_package_keywords_0: string;
		npm_package_name: string;
		POSH_SHELL_VERSION: string;
		LANG: string;
		npm_config_resolution_mode: string;
		npm_package_keywords_1: string;
		SDKMAN_VERSION: string;
		NODE_PATH: string;
		npm_package_devDependencies_sass: string;
		npm_package_exports___types: string;
		npm_package_scripts_build: string;
		npm_package_keywords_2: string;
		npm_package_keywords_3: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_keywords_8: string;
		npm_package_type: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		LANGUAGE: string;
		HOMEBREW_PREFIX: string;
		PROMPT: string;
		CONDA_PYTHON_EXE: string;
		POSH_PROMPT_COUNT: string;
		LOGNAME: string;
		npm_config_cache: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		SDKMAN_DIR: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_package_scripts_package: string;
		CONDA_DEFAULT_ENV: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		BROWSER: string;
		TERMINAL: string;
		npm_package_files_2: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		SDKMAN_CANDIDATES_DIR: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_package_files_1: string;
		npm_package_files_0: string;
		POSH_PID: string;
		POSH_THEME: string;
		npm_package_scripts_check: string;
		npm_node_execpath: string;
		COLORTERM: string;
		npm_config_prefix: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
