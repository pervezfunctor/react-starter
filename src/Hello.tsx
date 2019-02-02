import React from 'react'

export interface HelloProps {
  readonly name?: string
}
export const Hello: React.SFC<HelloProps> = ({ name }) => (
  <h1>Hello, {name || 'World'}!</h1>
)
