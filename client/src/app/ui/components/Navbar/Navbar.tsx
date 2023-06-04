import styles from './Navbar.module.css'
import { SearchOutlined, ShoppingCart } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import AccessButton from './AccessButton'

function Navbar() {
  return (
    <section className={styles.container}>
      <div className={styles.items}>
        <div className={styles.topArea}>
          <img src="/images/logo.jpg" width={60} />
          <span className={styles.textLogo}>CÓCTEL & CREAM</span>
        </div>
        <div className={styles.centerArea}>
          <SearchOutlined className={styles.searchLogo} />
          <input
            type="text"
            autoFocus
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
            className={styles.searchInput}
            placeholder="Buscar en Cóctel & Cream..."
          />
        </div>
        <div className={styles.bottomArea}>
          <Badge
            // badgeContent={cart.length}
            badgeContent={2}
            color="primary"
            // invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              // onClick={() => dispatch(setIsCartOpen())}
              sx={{ color: 'white' }}
            >
              <ShoppingCart sx={{ fontSize: '30px' }} />
            </IconButton>
          </Badge>
          <AccessButton />
        </div>
      </div>
    </section>
  )
}

export default Navbar
