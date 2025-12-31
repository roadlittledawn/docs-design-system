import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { NavigationConfig } from '../types/navigation'

export function loadNavigation(): NavigationConfig {
  try {
    const navPath = path.join(process.cwd(), 'nav.yaml')
    const fileContents = fs.readFileSync(navPath, 'utf8')
    const navigation = yaml.load(fileContents) as NavigationConfig

    // Basic validation
    if (!navigation || !navigation.primary || !Array.isArray(navigation.primary)) {
      throw new Error('Invalid navigation structure: missing primary array')
    }

    // Validate each primary item
    navigation.primary.forEach((item, index) => {
      if (!item.id || !item.label || !item.icon || !Array.isArray(item.secondary)) {
        throw new Error(`Invalid primary nav item at index ${index}`)
      }
    })

    return navigation
  } catch (error) {
    console.error('Error loading navigation:', error)
    // Return a minimal fallback navigation
    return {
      primary: []
    }
  }
}
