import pkg from 'next-i18next/package.json';
import { useTranslation } from 'next-i18next';
import type { FC } from 'react';

export const Footer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer>
      <p>{t('application-name')}</p>
      <p>next-i18next v{pkg.version}</p>
    </footer>
  );
};
