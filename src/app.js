import { useLayoutEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import fontHandler from '@media-platforms/theme-system/typography/font-family';
import theme from './theme';
import FontLoader from './font-loader';
import './app.css';
import ScopeWrapper from './scope-wrapper';
import { Components } from './components';

function setFontsViaHandler(theme) {
	Object.keys(theme.fontFamilies).forEach((family) => {
		const sx = {};
		const fontVariants = theme.fontFamilies[family].variants;
		const isObject = fontVariants && fontVariants.constructor === Object;
		if (isObject) {
			Object.keys(fontVariants).forEach((variantKey) => {
				const [variant, value] = variantKey.split(':');
				if (variant === 'weight' || variant === 'style') {
					if (variant === 'weight') {
						sx.fontWeight = value;
					} else if (variant === 'style') {
						sx.fontStyle = value;
					}
				}
			});
		}
		fontHandler({ value: family, props: { theme }, sx });
	});
}

function App() {
	const [fonts, setFonts] = useState(null);

	useLayoutEffect(() => {
		setFontsViaHandler(theme);
		const newFonts = theme.fontFamilies;
		if (JSON.stringify(fonts) !== JSON.stringify(newFonts)) {
			setFonts(newFonts);
		}
	}, [fonts]);

	return (
		<ThemeProvider pageId={null} theme={theme}>
			<ScopeWrapper>
				{fonts && <FontLoader fonts={fonts} />}
				<section className="App">
					<Components />
				</section>
			</ScopeWrapper>
		</ThemeProvider>
	);
}

export default App;
