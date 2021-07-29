import styled from 'styled-components'
import MaterialTable from 'material-table'

export const MaterialTableStyled = styled(({columns, data, className, ...props }) => (
    <MaterialTable 
        {...props} 
        data={data}
        columns={columns}
        components={{
            Container: containerProps => 
                <div className={className}>
                    {containerProps.children}
                </div>,
        }}

        
    />
  ))`

    background-color:  ${({theme})=> theme.primary.background } ; 
    box-shadow: none;
    
    button{
        :hover{
            background-color: ${({theme})=> theme.secondary.background };

            svg{
                fill: ${({theme})=> theme.secondary.text };
            }
        }

        :disabled{
            :hover{
                background-color: ${({theme})=> theme.default.background };
            }

            svg{
                fill: ${({theme})=> theme.primary.background };
            }
        }
    }

    svg{
        fill: ${({theme})=> theme.primary.text };
    }

    div{
        color: ${({theme})=> theme.primary.text };
    }

    table{
        box-shadow: none;

        button{
            :disabled{
                svg{
                    fill: ${({theme})=> theme.primary.background };
                }
            }
        }

        thead{
            tr{
                th{
                    color: ${({theme})=> theme.primary.text } !important;
                    background-color: ${({theme})=> theme.primary.background } !important;
    
                    :first-child{
                        border-top-left-radius: 20px;
                    }
                    
                    :last-child{
                        border-top-right-radius: 20px;
                    }
                }
            }
        }

        tbody{
            tr{
                td{
                    :first-child{
                        border-left: 2px solid ${({theme})=>theme.primary.background };
                    }
                    
                    :last-child{
                        border-right: 2px solid ${({theme})=>theme.primary.background };
                    }
                }
            }
        }

        tfoot{
            tr{
                td{
                    color: ${({theme})=> theme.primary.text } !important;
                    background-color: ${({theme})=> theme.primary.background } !important;
                    border-bottom: 2px solid ${({theme})=>theme.primary.background };

                    :first-child{
                        border-bottom-left-radius: 20px;
                    }
                    
                    :last-child{
                        border-bottom-right-radius: 20px;
                    }
                }
            }
        }
    }
`