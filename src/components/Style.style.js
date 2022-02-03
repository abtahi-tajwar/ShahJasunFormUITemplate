import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center' };
    align-items: ${props => props.align ? props.align : 'center' };
    gap: ${props => props.gap ? props.gap : '0px' };
`