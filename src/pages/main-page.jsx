import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import WirelessSection from '../components/wireless-section';
import CaseSection from '../components/case-section';
import HeadphonesSection from '../components/headphones-section';

export default function MainPage() {
  return (
    <div>
      <SiteHeader />
      <CaseSection />
      <HeadphonesSection />
      <WirelessSection />
      <SiteFooter />
    </div>
  );
}
