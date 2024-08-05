import { atom, useAtom, useAtomValue } from 'jotai';
import { scopeProvider } from '@media-platforms/scope/data-provider';
import ScopeManager from '@media-platforms/scope/manager';
import { loader } from '@media-platforms/scope/loader';
import { loadable, useHydrateAtoms } from 'jotai/utils'

const STATIC_ASSET_DOMAIN='https://static-assets.hearstapps'
const STATIC_ASSET_MANIFEST='manifest.json'
const STATIC_ASSET_PREFIX='latest'

const asyncManifest = atom(loader)
const loadableManifest = loadable(asyncManifest)

function ScopeWrapper({ children }) {
	const scopes = {
		"@site": "fre/en-us",
		"@brand": "goodhousekeeping",
		"@app": "fre"
	};
	const asset = `${STATIC_ASSET_DOMAIN}.net/_assets/design-tokens/latest`;
	const manifestUrl = `${STATIC_ASSET_DOMAIN}.net/design-tokens/${STATIC_ASSET_PREFIX}/${STATIC_ASSET_MANIFEST}`;
	
	useHydrateAtoms([
		[scopeProvider.atom, new ScopeManager({ scopes, manifest: {}, asset, manifestUrl })]
	]);
	const scopeManager = useAtomValue(scopeProvider.atom);
	const [loadedManifest] = useAtom(loadableManifest);
	if (loadedManifest.state === 'hasError') return <p>Error</p>
	if (loadedManifest.state === 'loading') {
		return <p>Loading</p>
	}
	if (loadedManifest.state === 'hasData' && Object.keys(scopeManager.manifest).length === 0) {
		scopeManager.setManifest(loadedManifest.data)
	}	
	return children;
}

export default ScopeWrapper;
