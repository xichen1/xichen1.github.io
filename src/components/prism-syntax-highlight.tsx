import React, {useContext, useEffect, useState} from "react";
import {
    Highlight
} from "prism-react-renderer";
import {ThemeContext} from "@src/components/ThemeContextWrapper";
import {duotoneDarkCustom, jettwaveLightCustom} from "@src/lib/prismThemes";

const PrismSyntaxHighlight = ({ children, className }: {children: string, className: string}) => {
    if (!className) className = 'language-test';
    const language = className.replace(/language-/gm, '');
    // retrieve theme state
    const themeState = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    const theme = themeState === 'light' ? jettwaveLightCustom : duotoneDarkCustom;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <Highlight code={children} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style} >
                    {tokens.slice(0, -1).map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default PrismSyntaxHighlight;