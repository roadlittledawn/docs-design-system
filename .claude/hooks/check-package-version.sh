#!/bin/bash
# Hook script to check if package changes require a version bump

# Get the list of staged files in packages/
STAGED_PACKAGE_FILES=$(git diff --cached --name-only -- 'packages/' 2>/dev/null | grep -v 'package.json' || true)

# If no package files are staged (excluding package.json), nothing to check
if [ -z "$STAGED_PACKAGE_FILES" ]; then
  exit 0
fi

# Check each package directory for changes
for pkg_dir in packages/*/; do
  pkg_name=$(basename "$pkg_dir")

  # Check if this package has staged changes (excluding package.json)
  pkg_changes=$(git diff --cached --name-only -- "$pkg_dir" 2>/dev/null | grep -v 'package.json' || true)

  if [ -z "$pkg_changes" ]; then
    continue
  fi

  # Check if version was bumped by comparing staged package.json with HEAD
  version_staged=$(git show :${pkg_dir}package.json 2>/dev/null | grep '"version"' | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/' || true)
  version_head=$(git show HEAD:${pkg_dir}package.json 2>/dev/null | grep '"version"' | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/' || true)

  # If versions are the same, warn the user
  if [ "$version_staged" = "$version_head" ] && [ -n "$version_head" ]; then
    echo "WARNING: Package '$pkg_name' has changes but version is unchanged ($version_head)"
    echo "Consider running: /bump-version [patch|minor|major] $pkg_name"
    echo ""
  fi
done
