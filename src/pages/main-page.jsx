import WirelessSection from '../components/wireless-section';
import CaseSection from '../components/case-section';
import HeadphonesSection from '../components/headphones-section';

export default function MainPage() {
  return (
    <div>
      <CaseSection />
      <HeadphonesSection />
      <WirelessSection />
    </div>
  );
}
