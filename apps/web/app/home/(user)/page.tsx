import { PageBody } from '@kit/ui/page';
import { Trans } from '@kit/ui/trans';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';
import { HomeLayoutPageHeader } from './_components/home-page-header';
//import UserHomePageClient from './userhomepageclient';
//import { TextEditor } from '@kit/text-editor';
import { FileUploadPlugin } from '@kit/file-upload-gpt';
//import { FileUploadPlugin } from 'packages/plugins/file-upload-gpt';
import '@kit/text-editor/style';

export const generateMetadata = async () => {
  const i18n = await createI18nServerInstance();
  const title = i18n.t('account:homePage');

  return {
    title,
  };
};

function UserHomePage() {
  return (
    <>
      <HomeLayoutPageHeader
        title={<Trans i18nKey={'common:homeTabLabel'} />}
        description={<Trans i18nKey={'common:homeTabDescription'} />}
      />
      <PageBody>
        <FileUploadPlugin />
      </PageBody>
    </>
  );
}

export default withI18n(UserHomePage);


// <UserHomePageClient />
// <TextEditor />


/* ORIGINAL

import { PageBody } from '@kit/ui/page';
import { Trans } from '@kit/ui/trans';

import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

// local imports
import { HomeLayoutPageHeader } from './_components/home-page-header';

export const generateMetadata = async () => {
  const i18n = await createI18nServerInstance();
  const title = i18n.t('account:homePage');

  return {
    title,
  };
};

function UserHomePage() {
  return (
    <>
      <HomeLayoutPageHeader
        title={<Trans i18nKey={'common:homeTabLabel'} />}
        description={<Trans i18nKey={'common:homeTabDescription'} />}
      />

      <PageBody></PageBody>
    </>
  );
}

export default withI18n(UserHomePage);

*/