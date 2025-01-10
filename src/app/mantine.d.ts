import {UnstyledButtonProps} from '@mantine/core'

declare module '@mantine/core' {
   export interface UnstyledButtonProps {
      feedpage?: string,
      radiopage?: string
   }
}