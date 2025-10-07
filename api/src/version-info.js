export function getVersion() {
  return {
    version: "1.0.0",
    build: "render-deploy",
    date: new Date().toISOString()
  };
}

export function getCommit() {
  return "render-deploy";
}

export function getBranch() {
  return "main";
}

export function getRemote() {
  return "https://github.com/imputnet/cobalt";
}
