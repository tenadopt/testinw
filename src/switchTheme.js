// Swaps the stylesheet to achieve dark mode.

let themeStyle = 'dark';

export function switchTheme(theme, styleLink) {
    themeStyle = themeStyle === 'dark' ? 'light' : 'dark';
    theme.src = themeStyle === 'light' ? 'assets/moonIcon.svg' : 'assets/sunIcon.svg';

    fetch(`styles/${themeStyle}.css`)
        .then(response => response.text())
        .then(css => {
            const blob = new Blob([css], { type: 'text/css' });
            const url = URL.createObjectURL(blob);

            styleLink.href = url;
        });
}
