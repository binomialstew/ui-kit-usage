import { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { scopeProvider } from '@media-platforms/scope/data-provider';

function FontLoader({ fonts = [] }) {
	const [styles, setStyles] = useState([]);	
	const { atom } = scopeProvider;
	const scopeManager = useAtomValue(atom);

	useEffect(() => {
		const fontsArray = [];

		Object.entries(fonts).forEach((family) => {
			const [, format] = family[1].src[0].split('.');
			const fontFamily = family[0];
			let src = family[1].src[0];
			if (scopeManager) {
				src = scopeManager.resolve(src);
			}
			const fontWeight = 'normal';
			const fontStyle = 'normal';
			fontsArray.push({
				'@font-face': {
					fontFamily,
					src: `local('${fontFamily}'), url('${src}') format('${format}')`,
					fontWeight,
					fontStyle,
					fontDisplay: 'swap',
				},
			});
			if (family[1].variants) {
				const fontVariants = family[1].variants;

				Object.entries(fontVariants).forEach((item) => {
					const [variant, value] = item[0].split(':');
					const variantFontWeight = variant === 'weight' ? value : 'normal';
					const variantFontStyle = variant === 'style' ? value : 'normal';
					let variantSrc = item[1].src;
					if (scopeManager) {
						variantSrc = scopeManager.resolve(variantSrc);
					}
					fontsArray.push({
						'@font-face': {
							fontFamily,
							src: `local('${fontFamily}'), url('${variantSrc}') format('${format}')`,
							fontWeight: variantFontWeight,
							fontStyle: variantFontStyle,
							fontDisplay: 'swap',
						},
					});
				});
			}
		});

		setStyles(fontsArray);
	}, [fonts, scopeManager]);

	return <Global styles={styles} />;
}

export default FontLoader;
