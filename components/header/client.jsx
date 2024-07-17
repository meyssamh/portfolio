'use client'

import { HeaderBase } from './HeaderBase';
import { useTranslation } from '../../app/i18n/client';

export const Header = ({ lng }) => {
    const { t } = useTranslation(lng, 'header');
    
    return (
        <HeaderBase t={t} lng={lng} />
    );
}