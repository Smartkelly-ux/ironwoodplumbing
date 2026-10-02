import heroMechanicalRoom from './images/hero_mechanical_room_1790964937875.jpg';
import heroDetailPipes from './images/hero_detail_pipes_1790964949643.jpg';
import bgInfrastructure from './images/bg_infrastructure_1790964960803.jpg';
import curvedBoilerField from './images/curved_boiler_field_1790964974869.jpg';
import indMultifamily from './images/ind_multifamily_1790964987316.jpg';
import indApartments from './images/ind_apartments_1790964999987.jpg';
import indCommercial from './images/ind_commercial_1790965012450.jpg';
import indInstitutional from './images/ind_institutional_1790965024679.jpg';
import hotWaterBoilers from './images/hot_water_boilers_1790965037525.jpg';
import cameraInspectionRig from './images/camera_inspection_rig_1790965049940.jpg';
import fieldCommercial from './images/field_commercial_1790965061717.jpg';
import fieldHotWater from './images/field_hot_water_1790965074690.jpg';
import fieldBoilers from './images/field_boilers_1790965086813.jpg';
import fieldDiagnostics from './images/field_diagnostics_1790965097547.jpg';
import ctaMechanicalBg from './images/cta_mechanical_bg_1790965111292.jpg';

export const IMAGES = {
  hero: {
    main: heroMechanicalRoom,
    detail: heroDetailPipes,
  },
  infrastructureBand: bgInfrastructure,
  curvedHolder: curvedBoilerField,
  industries: {
    multifamily: indMultifamily,
    apartments: indApartments,
    commercial: indCommercial,
    institutional: indInstitutional,
  },
  hotWater: hotWaterBoilers,
  cameraDiagnostics: cameraInspectionRig,
  fieldWork: [
    {
      id: 'commercial',
      label: 'COMMERCIAL',
      title: 'Commercial Mechanical Room Infrastructure',
      description: 'Dual pressure-relief valve rebuild and domestic hot-water header balancing for a high-occupancy corporate facility.',
      image: fieldCommercial,
    },
    {
      id: 'hot-water',
      label: 'HOT WATER',
      title: 'Multi-Unit Tankless Water Heating Array',
      description: 'Industrial-tier cascade tankless system delivering on-demand thermal stability with zero recovery lag for 120 residential units.',
      image: fieldHotWater,
    },
    {
      id: 'boilers',
      label: 'BOILERS',
      title: 'Condensing Hydronic Boiler Bank',
      description: 'Precision combustion tuning, expansion loop balancing, and high-efficiency heat exchanger servicing in Southern California.',
      image: fieldBoilers,
    },
    {
      id: 'diagnostics',
      label: 'DIAGNOSTICS',
      title: 'High-Definition CCTV Sewer Inspection',
      description: 'Full-spectrum pipeline condition mapping, radio-frequency locating, and structural defect identification before capital repiping.',
      image: fieldDiagnostics,
    },
  ],
  systemPanels: [
    {
      num: '01',
      id: 'plumbing',
      title: 'PLUMBING',
      subtitle: 'Continuous Supply & Sanitary Infrastructure',
      statement: 'Commercial-grade copper, stainless, and cast-iron distribution manifolds engineered for resilient multi-story flow and zero unplanned shutdowns.',
      image: heroMechanicalRoom,
    },
    {
      num: '02',
      id: 'hot-water',
      title: 'HOT WATER',
      subtitle: 'High-Recovery Thermal Systems',
      statement: 'High-volume domestic hot-water storage and circulating loops engineered to maintain exact regulated temperature across demanding peak hours.',
      image: hotWaterBoilers,
    },
    {
      num: '03',
      id: 'boilers',
      title: 'BOILERS',
      subtitle: 'Hydronic & Gas Combustion Plants',
      statement: 'Specialized commercial boiler maintenance, certified ASME pressure vessel compliance, burner tuning, and high-efficiency heat generation.',
      image: fieldBoilers,
    },
    {
      num: '04',
      id: 'sewer',
      title: 'SEWER',
      subtitle: 'Waste Drainage & Heavy Line Remediation',
      statement: 'Heavy hydro-jetting, mainline clearing, structural lining, and grease waste interceptors built for commercial and institutional scale.',
      image: fieldCommercial,
    },
  ],
  ctaBackground: ctaMechanicalBg,
};
