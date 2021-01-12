import { PropsWithChildren } from 'react'

export interface BaseProps {
    className: string
    [key: string]: unknown
}

export interface FormatIcon {
    format: string
    icon: string
}

export type ImgProps = PropsWithChildren<{
    focus?: boolean
    selected?: boolean
} & BaseProps>
