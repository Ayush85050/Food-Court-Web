const { execSync } = require('child_process');
const fs = require('fs');

const edgePath = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;
const htmlPath = `"file:///C:/Users/Dell/New%20folder%20(2)/Ayush_Sharma_Resume.html"`;
const pdfOutputPath = `"C:\\Users\\Dell\\New folder (2)\\Ayush_Sharma_Resume.pdf"`;
const pdfArtifactPath = `"C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\778f143c-aaee-46fd-8679-040c42cf2277\\Ayush_Sharma_Resume.pdf"`;

const cmd = `${edgePath} --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf=${pdfOutputPath} ${htmlPath}`;
console.log("Executing:", cmd);
execSync(cmd);

console.log("PDF created successfully:", fs.existsSync("C:\\Users\\Dell\\New folder (2)\\Ayush_Sharma_Resume.pdf"));

fs.copyFileSync("C:\\Users\\Dell\\New folder (2)\\Ayush_Sharma_Resume.pdf", "C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\778f143c-aaee-46fd-8679-040c42cf2277\\Ayush_Sharma_Resume.pdf");
console.log("Copied to artifacts!");
