# Using local packages example for debug

## 1. Pack all the local packages

```sh
npm pack
mv local-package-name-x.y.z.tgz ${this_project}/plugins
```

## 2. Add to the dependencies and optional dependencies

### package.json

```json
{
  "dependencies": {
    "@my-monorepo/core": "./plugins/my-monorepo-core-0.0.1.tgz"
  },
  "optionalDependencies": {
    "@my-monorepo/button": "./plugins/my-monorepo-button-0.0.1.tgz",
    "@my-monorepo/preset-base": "./plugins/my-monorepo-preset-base-0.0.1.tgz",
    "@my-monorepo/some-component": "./plugins/my-monorepo-some-component-0.0.1.tgz"
  }
}
```

```sh
npm install
```
