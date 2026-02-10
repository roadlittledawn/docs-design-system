# bump-version

Bump the version of a package in packages/ directory.

## Usage

```
/bump-version [patch|minor|major] [package-name]
```

- `patch` (default): Bug fixes, backwards compatible (0.1.0 -> 0.1.1)
- `minor`: New features, backwards compatible (0.1.0 -> 0.2.0)
- `major`: Breaking changes (0.1.0 -> 1.0.0)
- `package-name` (optional): Package directory name (e.g., "react"). Defaults to "react" if only one package or prompts if multiple.

## Examples

- `/bump-version` - Bump patch version of react package
- `/bump-version minor` - Bump minor version of react package
- `/bump-version major react` - Bump major version of react package

## Instructions

When this skill is invoked:

1. Parse the arguments to determine:
   - Version bump type (default: patch)
   - Package name (default: react, or prompt if multiple packages exist)

2. Read the current version from `packages/{package-name}/package.json`

3. Calculate the new version based on semver:
   - For `patch`: increment the third number (0.1.0 -> 0.1.1)
   - For `minor`: increment the second number, reset patch to 0 (0.1.1 -> 0.2.0)
   - For `major`: increment the first number, reset minor and patch to 0 (0.2.1 -> 1.0.0)

4. Update the `version` field in the package.json file

5. Report the change: "Bumped {package-name} from {old-version} to {new-version}"

6. Remind the user to commit the version bump with their other changes
