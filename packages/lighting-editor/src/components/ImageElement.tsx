import {
    useSelected,
    useFocused,
  } from 'slate-react'
import styled from 'styled-components'

import { ImgProps } from './Props'


const Img = styled.img`
    display: block;
    max-width: 100%;
    box-shadow: ${(props: ImgProps) => props.selected && props.focused ? '0 0 0 2px blue;' : 'none'};
`

// todo max-width
const ImageElement = ({ attributes, children, element }) => {
    const selected = useSelected()
    const focused = useFocused()

    return (
      <div {...attributes}>
        <div contentEditable={false}>
            <Img
            src={element.url}
            focused={focused}
            selected={selected}
            />
          </div>
        {children}
      </div>
    )
  }

export default ImageElement
