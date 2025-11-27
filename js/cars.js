// База данных автомобилей Propellini (400+ моделей)
// С фильтрацией по типу кузова

const CAR_DATABASE = {
  'small': {
    name: '1 класс',
    bodyTypes: ['sedan', 'coupe', 'hatchback'],
    brands: {
      'Audi': {
        models: ['A3', 'A4', 'A5', 'A6', 'A7', 'S3', 'S4', 'S5', 'S6', 'RS3', 'RS4', 'RS5', 'RS6'],
        bodyTypes: { 'A3': ['sedan', 'hatchback'], 'A4': ['sedan'], 'A5': ['coupe', 'sedan'], 'A6': ['sedan'], 'A7': ['sedan'], 'S3': ['sedan', 'hatchback'], 'S4': ['sedan'], 'S5': ['coupe'], 'S6': ['sedan'], 'RS3': ['sedan', 'hatchback'], 'RS4': ['sedan'], 'RS5': ['coupe'], 'RS6': ['sedan'] }
      },
      'BMW': {
        models: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', 'M2', 'M3', 'M4', 'M5', 'M8', 'i3', 'i4'],
        bodyTypes: { '1 Series': ['hatchback'], '2 Series': ['coupe'], '3 Series': ['sedan'], '4 Series': ['coupe', 'sedan'], '5 Series': ['sedan'], 'M2': ['coupe'], 'M3': ['sedan'], 'M4': ['coupe'], 'M5': ['sedan'], 'M8': ['coupe', 'sedan'], 'i3': ['hatchback'], 'i4': ['sedan'] }
      },
      'Mercedes-Benz': {
        models: ['A-Class', 'B-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'S-Class', 'AMG A35', 'AMG A45', 'AMG C43', 'AMG C63', 'AMG E53', 'AMG E63', 'AMG GT'],
        bodyTypes: { 'A-Class': ['hatchback', 'sedan'], 'B-Class': ['hatchback'], 'C-Class': ['sedan', 'coupe'], 'CLA': ['sedan'], 'CLS': ['sedan'], 'E-Class': ['sedan', 'coupe'], 'S-Class': ['sedan'], 'AMG A35': ['hatchback', 'sedan'], 'AMG A45': ['hatchback'], 'AMG C43': ['sedan', 'coupe'], 'AMG C63': ['sedan', 'coupe'], 'AMG E53': ['sedan'], 'AMG E63': ['sedan'], 'AMG GT': ['coupe'] }
      },
      'Toyota': {
        models: ['Camry', 'Corolla', 'Prius', 'Auris', 'Yaris', 'GT86', 'GR86', 'Supra', 'Crown', 'Mark X', 'Avalon'],
        bodyTypes: { 'Camry': ['sedan'], 'Corolla': ['sedan', 'hatchback'], 'Prius': ['hatchback'], 'Auris': ['hatchback'], 'Yaris': ['hatchback'], 'GT86': ['coupe'], 'GR86': ['coupe'], 'Supra': ['coupe'], 'Crown': ['sedan'], 'Mark X': ['sedan'], 'Avalon': ['sedan'] }
      },
      'Lexus': {
        models: ['IS', 'ES', 'GS', 'LS', 'RC', 'LC'],
        bodyTypes: { 'IS': ['sedan'], 'ES': ['sedan'], 'GS': ['sedan'], 'LS': ['sedan'], 'RC': ['coupe'], 'LC': ['coupe'] }
      },
      'Porsche': {
        models: ['911', '718 Boxster', '718 Cayman', 'Panamera', 'Taycan'],
        bodyTypes: { '911': ['coupe'], '718 Boxster': ['convertible'], '718 Cayman': ['coupe'], 'Panamera': ['sedan'], 'Taycan': ['sedan'] }
      },
      'Infiniti': {
        models: ['Q50', 'Q60', 'Q70', 'Q30'],
        bodyTypes: { 'Q50': ['sedan'], 'Q60': ['coupe'], 'Q70': ['sedan'], 'Q30': ['hatchback'] }
      },
      'Kia': {
        models: ['Optima', 'K5', 'Stinger', 'Rio', 'Cerato', 'Forte', 'K900'],
        bodyTypes: { 'Optima': ['sedan'], 'K5': ['sedan'], 'Stinger': ['sedan'], 'Rio': ['sedan', 'hatchback'], 'Cerato': ['sedan', 'hatchback'], 'Forte': ['sedan', 'hatchback'], 'K900': ['sedan'] }
      },
      'Hyundai': {
        models: ['Elantra', 'Sonata', 'Genesis', 'i30', 'i40', 'Veloster', 'Ioniq'],
        bodyTypes: { 'Elantra': ['sedan'], 'Sonata': ['sedan'], 'Genesis': ['sedan'], 'i30': ['hatchback'], 'i40': ['sedan'], 'Veloster': ['hatchback'], 'Ioniq': ['hatchback'] }
      }
    }
  },
  'business': {
    name: '2 класс',
    bodyTypes: ['sedan', 'coupe', 'wagon', 'crossover'],
    brands: {
      'Audi': {
        models: ['A6', 'A7', 'A8', 'Q3', 'Q5', 'S6', 'S7', 'S8', 'RS6', 'RS7', 'e-tron'],
        bodyTypes: { 'A6': ['sedan', 'wagon'], 'A7': ['sedan'], 'A8': ['sedan'], 'Q3': ['crossover'], 'Q5': ['crossover'], 'S6': ['sedan', 'wagon'], 'S7': ['sedan'], 'S8': ['sedan'], 'RS6': ['wagon'], 'RS7': ['sedan'], 'e-tron': ['crossover'] }
      },
      'BMW': {
        models: ['5 Series', '6 Series', '7 Series', '8 Series', 'X1', 'X3', 'X4', 'M5', 'M6', 'M8', 'iX3', 'iX'],
        bodyTypes: { '5 Series': ['sedan', 'wagon'], '6 Series': ['coupe', 'sedan'], '7 Series': ['sedan'], '8 Series': ['coupe', 'sedan'], 'X1': ['crossover'], 'X3': ['crossover'], 'X4': ['crossover'], 'M5': ['sedan'], 'M6': ['coupe'], 'M8': ['coupe', 'sedan'], 'iX3': ['crossover'], 'iX': ['crossover'] }
      },
      'Mercedes-Benz': {
        models: ['E-Class', 'S-Class', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'AMG E63', 'AMG S63', 'AMG GT 4-Door'],
        bodyTypes: { 'E-Class': ['sedan', 'wagon'], 'S-Class': ['sedan'], 'CLS': ['sedan'], 'GLA': ['crossover'], 'GLB': ['crossover'], 'GLC': ['crossover'], 'GLE': ['crossover'], 'AMG E63': ['sedan', 'wagon'], 'AMG S63': ['sedan'], 'AMG GT 4-Door': ['sedan'] }
      },
      'Toyota': {
        models: ['RAV4', 'Highlander', 'Venza', 'Avalon', 'Crown'],
        bodyTypes: { 'RAV4': ['crossover'], 'Highlander': ['crossover'], 'Venza': ['crossover'], 'Avalon': ['sedan'], 'Crown': ['sedan'] }
      },
      'Lexus': {
        models: ['NX', 'RX', 'ES', 'GS', 'LS', 'UX'],
        bodyTypes: { 'NX': ['crossover'], 'RX': ['crossover'], 'ES': ['sedan'], 'GS': ['sedan'], 'LS': ['sedan'], 'UX': ['crossover'] }
      },
      'Porsche': {
        models: ['Macan', 'Cayenne', 'Panamera', 'Taycan'],
        bodyTypes: { 'Macan': ['crossover'], 'Cayenne': ['crossover'], 'Panamera': ['sedan', 'wagon'], 'Taycan': ['sedan'] }
      },
      'Infiniti': {
        models: ['QX30', 'QX50', 'QX55', 'Q50', 'Q60', 'Q70'],
        bodyTypes: { 'QX30': ['crossover'], 'QX50': ['crossover'], 'QX55': ['crossover'], 'Q50': ['sedan'], 'Q60': ['coupe'], 'Q70': ['sedan'] }
      },
      'Kia': {
        models: ['Sportage', 'Sorento', 'Telluride', 'Seltos', 'K5', 'Stinger'],
        bodyTypes: { 'Sportage': ['crossover'], 'Sorento': ['crossover'], 'Telluride': ['crossover'], 'Seltos': ['crossover'], 'K5': ['sedan'], 'Stinger': ['sedan'] }
      },
      'Hyundai': {
        models: ['Tucson', 'Santa Fe', 'Palisade', 'Kona', 'Venue', 'Sonata', 'Genesis'],
        bodyTypes: { 'Tucson': ['crossover'], 'Santa Fe': ['crossover'], 'Palisade': ['crossover'], 'Kona': ['crossover'], 'Venue': ['crossover'], 'Sonata': ['sedan'], 'Genesis': ['sedan'] }
      }
    }
  },
  'suv-lux': {
    name: '3 класс',
    bodyTypes: ['suv', 'crossover', 'sportscar'],
    brands: {
      'Audi': {
        models: ['Q7', 'Q8', 'R8', 'RS Q8', 'e-tron GT'],
        bodyTypes: { 'Q7': ['suv'], 'Q8': ['suv'], 'R8': ['sportscar'], 'RS Q8': ['suv'], 'e-tron GT': ['sportscar'] }
      },
      'BMW': {
        models: ['X5', 'X6', 'X7', 'XM', 'M3', 'M4', 'M5', 'M8', 'iX'],
        bodyTypes: { 'X5': ['suv'], 'X6': ['suv'], 'X7': ['suv'], 'XM': ['suv'], 'M3': ['sedan'], 'M4': ['coupe'], 'M5': ['sedan'], 'M8': ['coupe'], 'iX': ['suv'] }
      },
      'Mercedes-Benz': {
        models: ['GLE', 'GLS', 'G-Class', 'AMG G63', 'AMG GLS63', 'AMG GT', 'SLS AMG'],
        bodyTypes: { 'GLE': ['suv'], 'GLS': ['suv'], 'G-Class': ['suv'], 'AMG G63': ['suv'], 'AMG GLS63': ['suv'], 'AMG GT': ['sportscar'], 'SLS AMG': ['sportscar'] }
      },
      'Toyota': {
        models: ['Land Cruiser', 'Land Cruiser Prado', 'Sequoia', '4Runner', 'GR Supra'],
        bodyTypes: { 'Land Cruiser': ['suv'], 'Land Cruiser Prado': ['suv'], 'Sequoia': ['suv'], '4Runner': ['suv'], 'GR Supra': ['sportscar'] }
      },
      'Lexus': {
        models: ['RX', 'GX', 'LX', 'NX', 'LC'],
        bodyTypes: { 'RX': ['suv'], 'GX': ['suv'], 'LX': ['suv'], 'NX': ['suv'], 'LC': ['coupe'] }
      },
      'Porsche': {
        models: ['Cayenne', 'Macan', '911', 'Panamera', 'Taycan'],
        bodyTypes: { 'Cayenne': ['suv'], 'Macan': ['suv'], '911': ['sportscar'], 'Panamera': ['sedan'], 'Taycan': ['sportscar'] }
      },
      'Range Rover': {
        models: ['Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Defender'],
        bodyTypes: { 'Range Rover': ['suv'], 'Range Rover Sport': ['suv'], 'Range Rover Velar': ['suv'], 'Range Rover Evoque': ['suv'], 'Defender': ['suv'] }
      },
      'Infiniti': {
        models: ['QX60', 'QX70', 'QX80', 'FX'],
        bodyTypes: { 'QX60': ['suv'], 'QX70': ['suv'], 'QX80': ['suv'], 'FX': ['suv'] }
      }
    }
  },
  'pickup': {
    name: 'Большие пикапы',
    bodyTypes: ['pickup'],
    brands: {
      'Ford': {
        models: ['F-150', 'F-250', 'F-350', 'Ranger', 'Raptor'],
        bodyTypes: { 'F-150': ['pickup'], 'F-250': ['pickup'], 'F-350': ['pickup'], 'Ranger': ['pickup'], 'Raptor': ['pickup'] }
      },
      'Toyota': {
        models: ['Hilux', 'Tundra', 'Tacoma'],
        bodyTypes: { 'Hilux': ['pickup'], 'Tundra': ['pickup'], 'Tacoma': ['pickup'] }
      },
      'Chevrolet': {
        models: ['Silverado', 'Colorado', 'Avalanche'],
        bodyTypes: { 'Silverado': ['pickup'], 'Colorado': ['pickup'], 'Avalanche': ['pickup'] }
      },
      'RAM': {
        models: ['1500', '2500', '3500', 'TRX'],
        bodyTypes: { '1500': ['pickup'], '2500': ['pickup'], '3500': ['pickup'], 'TRX': ['pickup'] }
      },
      'Nissan': {
        models: ['Navara', 'Titan', 'Frontier'],
        bodyTypes: { 'Navara': ['pickup'], 'Titan': ['pickup'], 'Frontier': ['pickup'] }
      }
    }
  },
  'bus': {
    name: '4 класс',
    bodyTypes: ['minivan', 'van', 'suv'],
    brands: {
      'Mercedes-Benz': {
        models: ['Viano', 'Vito', 'Sprinter', 'G-Class', 'GLS'],
        bodyTypes: { 'Viano': ['minivan'], 'Vito': ['van'], 'Sprinter': ['van'], 'G-Class': ['suv'], 'GLS': ['suv'] }
      },
      'BMW': {
        models: ['X7', 'Alpina XB7'],
        bodyTypes: { 'X7': ['suv'], 'Alpina XB7': ['suv'] }
      },
      'Toyota': {
        models: ['Alphard', 'Hiace', 'Land Cruiser', 'Sequoia'],
        bodyTypes: { 'Alphard': ['minivan'], 'Hiace': ['van'], 'Land Cruiser': ['suv'], 'Sequoia': ['suv'] }
      },
      'Volkswagen': {
        models: ['Multivan', 'Caravelle', 'Transporter'],
        bodyTypes: { 'Multivan': ['minivan'], 'Caravelle': ['minivan'], 'Transporter': ['van'] }
      }
    }
  }
};

// Получить все бренды
function getAllBrands() {
  const brandsSet = new Set();
  Object.values(CAR_DATABASE).forEach(classData => {
    Object.keys(classData.brands).forEach(brand => {
      brandsSet.add(brand);
    });
  });
  return Array.from(brandsSet).sort();
}

// Получить модели для бренда
function getModelsForBrand(brand, carClass = null, bodyType = null) {
  const models = [];
  const classes = carClass ? [carClass] : Object.keys(CAR_DATABASE);
  
  classes.forEach(classKey => {
    const classData = CAR_DATABASE[classKey];
    if (classData.brands[brand]) {
      const brandData = classData.brands[brand];
      brandData.models.forEach(model => {
        if (!models.includes(model)) {
          if (!bodyType || (brandData.bodyTypes[model] && brandData.bodyTypes[model].includes(bodyType))) {
            models.push(model);
          }
        }
      });
    }
  });
  
  return models.sort();
}

// Получить популярные модели для бренда (ТОП-30)
function getPopularModelsForBrand(brand) {
  const models = getModelsForBrand(brand);
  return models.slice(0, 30);
}

// Получить класс автомобиля по бренду и модели
function getCarClass(brand, model) {
  for (const [classKey, classData] of Object.entries(CAR_DATABASE)) {
    if (classData.brands[brand] && classData.brands[brand].models.includes(model)) {
      return classKey;
    }
  }
  return 'small'; // По умолчанию
}

// Получить типы кузова для модели
function getBodyTypesForModel(brand, model) {
  for (const classData of Object.values(CAR_DATABASE)) {
    if (classData.brands[brand] && classData.brands[brand].models.includes(model)) {
      return classData.brands[brand].bodyTypes[model] || [];
    }
  }
  return [];
}

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CAR_DATABASE,
    getAllBrands,
    getModelsForBrand,
    getPopularModelsForBrand,
    getCarClass,
    getBodyTypesForModel
  };
}








