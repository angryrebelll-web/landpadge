// База данных зон и услуг Propellini
// С поддержкой 5 типов пленки: Gloss, Matte, Satin, Smoke, Blackout

const FILM_TYPES = {
  GLOSS: 'gloss',
  MATTE: 'matte',
  SATIN: 'satin',
  SMOKE: 'smoke',
  BLACKOUT: 'blackout'
};

const FILM_TYPE_NAMES = {
  [FILM_TYPES.GLOSS]: 'Глянец',
  [FILM_TYPES.MATTE]: 'Мат',
  [FILM_TYPES.SATIN]: 'Сатин',
  [FILM_TYPES.SMOKE]: 'Дымка',
  [FILM_TYPES.BLACKOUT]: 'Блэкаут'
};

// Цены по классам и типам пленки
const PRICING = {
  'small': {
    fullWrap: {
      [FILM_TYPES.GLOSS]: 200000,
      [FILM_TYPES.MATTE]: 210000,
      [FILM_TYPES.SATIN]: 215000,
      [FILM_TYPES.SMOKE]: 220000,
      [FILM_TYPES.BLACKOUT]: 225000
    },
    riskZones: 25000
  },
  'business': {
    fullWrap: {
      [FILM_TYPES.GLOSS]: 200000,
      [FILM_TYPES.MATTE]: 210000,
      [FILM_TYPES.SATIN]: 215000,
      [FILM_TYPES.SMOKE]: 220000,
      [FILM_TYPES.BLACKOUT]: 225000
    },
    riskZones: 25000
  },
  'suv-lux': {
    fullWrap: {
      [FILM_TYPES.GLOSS]: 210000,
      [FILM_TYPES.MATTE]: 225000,
      [FILM_TYPES.SATIN]: 230000,
      [FILM_TYPES.SMOKE]: 235000,
      [FILM_TYPES.BLACKOUT]: 240000
    },
    riskZones: 25000
  },
  'pickup': {
    fullWrap: {
      [FILM_TYPES.GLOSS]: 210000,
      [FILM_TYPES.MATTE]: 225000,
      [FILM_TYPES.SATIN]: 230000,
      [FILM_TYPES.SMOKE]: 235000,
      [FILM_TYPES.BLACKOUT]: 240000
    },
    riskZones: 25000
  },
  'bus': {
    fullWrap: {
      [FILM_TYPES.GLOSS]: 220000,
      [FILM_TYPES.MATTE]: 235000,
      [FILM_TYPES.SATIN]: 240000,
      [FILM_TYPES.SMOKE]: 245000,
      [FILM_TYPES.BLACKOUT]: 250000
    },
    riskZones: 25000
  }
};

// Зоны оклейки (цены одинаковые для всех классов)
const ZONE_PRICES = {
  'zone-hood': 8000,
  'zone-front-bumper': 12000,
  'zone-front-fenders': 10000,
  'zone-doors': 15000,
  'zone-rear-fenders': 10000,
  'zone-rear-bumper': 10000,
  'zone-roof': 12000,
  'zone-mirrors': 5000,
  'zone-headlights': 8000,
  'zone-taillights': 6000,
  'zone-windshield': 15000,
  'zone-pillars': 8000,
  'zone-moldings': 5000,
  'zone-display': 15000,
  'zone-interior-glossy': 5000
};

// Зоны риска по классам
const RISK_ZONES = {
  'small': ['zone-hood', 'zone-front-bumper', 'zone-front-fenders', 'zone-mirrors'],
  'business': ['zone-hood', 'zone-front-bumper', 'zone-front-fenders', 'zone-mirrors'],
  'suv-lux': ['zone-hood', 'zone-front-bumper', 'zone-front-fenders', 'zone-mirrors', 'zone-doors'],
  'pickup': ['zone-hood', 'zone-front-bumper', 'zone-front-fenders', 'zone-mirrors'],
  'bus': ['zone-front-bumper', 'zone-mirrors']
};

// Инициализация базы данных зон
function initializeZonesDatabase(carClass) {
  const pricing = PRICING[carClass] || PRICING['small'];
  
  return {
    'Пакеты услуг': [
      { 
        id: 'package-basic', 
        name: 'Базовый набор (Зоны риска)', 
        price: pricing.riskZones, 
        type: 'package',
        zones: RISK_ZONES[carClass] || RISK_ZONES['small']
      },
      { 
        id: 'package-premium-gloss', 
        name: `Премиум (Зоны риска + Полная оклейка ${FILM_TYPE_NAMES[FILM_TYPES.GLOSS]})`, 
        price: pricing.riskZones + pricing.fullWrap[FILM_TYPES.GLOSS], 
        type: 'package',
        filmType: FILM_TYPES.GLOSS,
        zones: ['full-wrap', ...RISK_ZONES[carClass] || RISK_ZONES['small']]
      },
      { 
        id: 'package-premium-matte', 
        name: `Люкс (Зоны риска + Полная оклейка ${FILM_TYPE_NAMES[FILM_TYPES.MATTE]})`, 
        price: pricing.riskZones + pricing.fullWrap[FILM_TYPES.MATTE], 
        type: 'package',
        filmType: FILM_TYPES.MATTE,
        zones: ['full-wrap', ...RISK_ZONES[carClass] || RISK_ZONES['small']]
      },
      { 
        id: 'package-premium-satin', 
        name: `Премиум Сатин (Зоны риска + Полная оклейка ${FILM_TYPE_NAMES[FILM_TYPES.SATIN]})`, 
        price: pricing.riskZones + pricing.fullWrap[FILM_TYPES.SATIN], 
        type: 'package',
        filmType: FILM_TYPES.SATIN,
        zones: ['full-wrap', ...RISK_ZONES[carClass] || RISK_ZONES['small']]
      }
    ],
    'Полная оклейка': [
      { id: 'full-gloss', name: `Полная оклейка кузова ${FILM_TYPE_NAMES[FILM_TYPES.GLOSS]}`, price: pricing.fullWrap[FILM_TYPES.GLOSS], filmType: FILM_TYPES.GLOSS },
      { id: 'full-matte', name: `Полная оклейка кузова ${FILM_TYPE_NAMES[FILM_TYPES.MATTE]}`, price: pricing.fullWrap[FILM_TYPES.MATTE], filmType: FILM_TYPES.MATTE },
      { id: 'full-satin', name: `Полная оклейка кузова ${FILM_TYPE_NAMES[FILM_TYPES.SATIN]}`, price: pricing.fullWrap[FILM_TYPES.SATIN], filmType: FILM_TYPES.SATIN },
      { id: 'full-smoke', name: `Полная оклейка кузова ${FILM_TYPE_NAMES[FILM_TYPES.SMOKE]}`, price: pricing.fullWrap[FILM_TYPES.SMOKE], filmType: FILM_TYPES.SMOKE },
      { id: 'full-blackout', name: `Полная оклейка кузова ${FILM_TYPE_NAMES[FILM_TYPES.BLACKOUT]}`, price: pricing.fullWrap[FILM_TYPES.BLACKOUT], filmType: FILM_TYPES.BLACKOUT }
    ],
    'Зоны оклейки': [
      { id: 'zone-hood', name: 'Оклейка капота', price: ZONE_PRICES['zone-hood'] },
      { id: 'zone-front-bumper', name: 'Оклейка переднего бампера', price: ZONE_PRICES['zone-front-bumper'] },
      { id: 'zone-front-fenders', name: 'Оклейка передних крыльев', price: ZONE_PRICES['zone-front-fenders'] },
      { id: 'zone-doors', name: 'Оклейка дверей', price: ZONE_PRICES['zone-doors'] },
      { id: 'zone-rear-fenders', name: 'Оклейка задних крыльев', price: ZONE_PRICES['zone-rear-fenders'] },
      { id: 'zone-rear-bumper', name: 'Оклейка заднего бампера', price: ZONE_PRICES['zone-rear-bumper'] },
      { id: 'zone-roof', name: 'Оклейка крыши', price: ZONE_PRICES['zone-roof'] },
      { id: 'zone-mirrors', name: 'Оклейка зеркал', price: ZONE_PRICES['zone-mirrors'] },
      { id: 'zone-headlights', name: 'Оклейка фар', price: ZONE_PRICES['zone-headlights'] },
      { id: 'zone-taillights', name: 'Оклейка задних фонарей', price: ZONE_PRICES['zone-taillights'] },
      { id: 'zone-windshield', name: 'Броня лобового стекла', price: ZONE_PRICES['zone-windshield'] },
      { id: 'zone-pillars', name: 'Оклейка стоек', price: ZONE_PRICES['zone-pillars'] },
      { id: 'zone-moldings', name: 'Оклейка молдингов', price: ZONE_PRICES['zone-moldings'] },
      { id: 'zone-display', name: 'Оклейка дисплеев автомобиля', price: ZONE_PRICES['zone-display'] },
      { id: 'zone-interior-glossy', name: 'Оклейка глянцевых элементов салона', price: ZONE_PRICES['zone-interior-glossy'] }
    ],
    'Дополнительно': [
      { id: 'removal', name: 'Снятие пленки с одного элемента (без гарантии)', price: 5000 }
    ]
  };
}

// Получить зоны пакета
function getPackageZones(packageId) {
  const packages = {
    'package-basic': RISK_ZONES['small'],
    'package-premium-gloss': ['full-wrap', ...RISK_ZONES['small']],
    'package-premium-matte': ['full-wrap', ...RISK_ZONES['small']],
    'package-premium-satin': ['full-wrap', ...RISK_ZONES['small']]
  };
  return packages[packageId] || [];
}

// Получить цену зоны
function getZonePrice(zoneId, carClass = 'small') {
  if (zoneId.startsWith('full-')) {
    const filmType = zoneId.replace('full-', '');
    const pricing = PRICING[carClass] || PRICING['small'];
    return pricing.fullWrap[filmType] || pricing.fullWrap[FILM_TYPES.GLOSS];
  }
  return ZONE_PRICES[zoneId] || 0;
}

// Получить зоны риска для класса
function getRiskZonesForClass(carClass) {
  return RISK_ZONES[carClass] || RISK_ZONES['small'];
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FILM_TYPES,
    FILM_TYPE_NAMES,
    PRICING,
    ZONE_PRICES,
    RISK_ZONES,
    initializeZonesDatabase,
    getPackageZones,
    getZonePrice,
    getRiskZonesForClass
  };
}








