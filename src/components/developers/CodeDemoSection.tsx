import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { DemoButton } from "@/components/ui/DemoButton";

const codeString = `// Initialize Kikimora Security SDK
import KikimoraSecurity from '@kikimora/security-sdk';

const security = new KikimoraSecurity({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Monitor and protect your application
await security.monitor.start();
const threats = await security.scan.vulnerabilities();`;

// Custom style for green code theme
const greenTheme: Record<string, React.CSSProperties> = {
  'code[class*="language-"]': {
    color: "#3EDDCA",
    background: "transparent",
    fontFamily: "Fira Mono, Menlo, Monaco, Consolas, monospace",
    fontSize: "1.1rem",
    borderRadius: "1rem",
    padding: "2rem 1.5rem",
    width: "100%",
    minHeight: "260px",
    lineHeight: 1.6,
  },
  'pre[class*="language-"]': {
    color: "#3EDDCA",
    background: "transparent",
    fontFamily: "Fira Mono, Menlo, Monaco, Consolas, monospace",
    fontSize: "1.1rem",
    borderRadius: "1rem",
    padding: "2rem 1.5rem",
    width: "100%",
    minHeight: "260px",
    lineHeight: 1.6,
  },
  comment: { color: "#6ee7b7" },
  keyword: { color: "#3EDDCA", fontWeight: "bold" },
  string: { color: "#3EDDCA" },
  function: { color: "#3EDDCA" },
  variable: { color: "#3EDDCA" },
  number: { color: "#3EDDCA" },
  operator: { color: "#3EDDCA" },
  punctuation: { color: "#3EDDCA" },
};

export function CodeDemoSection() {
  return (
    <section className="w-full min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1747] to-[#1a2a4d] py-20 px-4">
      <h2 className="text-3xl md:text-3xl font-bold text-white text-center mb-10 font-conthrax">
        Secure your code now, thank yourself later
      </h2>
      <div className="w-full max-w-5xl bg-[#10192b] rounded-xl shadow-lg p-0 md:p-8 flex flex-col items-center">
        <SyntaxHighlighter
          language="typescript"
          style={greenTheme}
          customStyle={{
            background: "transparent",
            fontSize: "1.1rem",
            borderRadius: "1rem",
            margin: 0,
            padding: "2rem 1.5rem",
            width: "100%",
            minHeight: "260px",
          }}
          showLineNumbers={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="mt-10">
        <DemoButton
          variant="default"
          size="lg"
          className="bg-[#30b2a3] text-white hover:bg-[#31c9b7] border-none shadow-md font-bold px-8 py-4 rounded-lg transition-colors"
        >
          Get Started
        </DemoButton>
      </div>
    </section>
  );
}
