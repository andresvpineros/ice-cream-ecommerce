import { Button } from '@mui/material'
import { Person } from '@mui/icons-material'

const AccessButton = () => {
  return (
    <Button
      sx={{
        color: 'white',
        fontSize: '15px',
        textTransform: 'capitalize',
        marginLeft: '30px',
        fontFamily: 'Inter',
      }}
      startIcon={<Person style={{ fontSize: '32px' }} />}
    >
      Acceder
    </Button>
  )
}

export default AccessButton
