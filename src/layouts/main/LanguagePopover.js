import { useContext, useState } from 'react';
// @mui
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { LanguageContext } from '@/contexts/context';

// ----------------------------------------------------------------------

const LANGS = {
  en: {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  vi: {
    value: 'vi',
    label: 'Tiếng Việt',
    icon: '/assets/icons/ic_flag_vi.svg',
  }
};

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);
  const { language, changeLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (value) => {
    changeLanguage(value);
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const router = useRouter()

  const { pathname, asPath, query } = router
  const changeLang = (lang) => {
    handleLanguageChange()
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 35,
          height: 35
        }}
      >
        <Image src={LANGS[language].icon} alt={LANGS[language].label} width={35} height={35}/>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {Object.values(LANGS).map((option) => (
            <MenuItem 
              key={option.value} 
              selected={option.value === LANGS[language].value} 
              onClick={() => {
                handleClose()
                changeLang(option.value)
              }}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
