import { createStandardAction as fsa } from 'typesafe-actions'
import { View } from './types'

export const setVisibility = fsa('visibility/set')<View>()

