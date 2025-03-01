"use client"
import { useState, useEffect } from 'react';

const ProductVariantSelector = ({ variantsNames, variants, specs }) => {
  const [selected, setSelected] = useState(() =>
    Object.keys(specs).reduce((acc, key) => ({ ...acc, [key]: specs[key].value }), {})
  );

  const allPossibleValues = Object.keys(variantsNames).reduce((acc, key) => {
    acc[key] = [...new Set(variants.map(v => v.diffSpecs[key]))];
    return acc;
  }, {});

  const getAvailableOptions = (currentKey) => {
    const otherKeys = { ...selected };
    delete otherKeys[currentKey];

    return variants
      .filter(variant =>
        Object.entries(otherKeys).every(([key, value]) =>
          value === null || variant.diffSpecs[key] === value
        )
      )
      .map(v => v.diffSpecs[currentKey])
      .filter((v, i, arr) => arr.indexOf(v) === i);
  };

  useEffect(() => {
    const newSelected = { ...selected };
    let hasChanges = false;

    Object.keys(selected).forEach(key => {
      if (selected[key] === null) return;
      const available = getAvailableOptions(key);
      if (!available.includes(selected[key])) {
        newSelected[key] = null;
        hasChanges = true;
      }
    });

    hasChanges && setSelected(newSelected);
  }, [selected, variants]);

  const handleSelect = (key, value) => {
    setSelected(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-2">
      {Object.entries(variantsNames).map(([key, label]) => {
        const availableOptions = getAvailableOptions(key);

        return (
          <div key={key}>
            <h3 className="mb-1 text-sm font-semibold">{label}</h3>
            <div className="flex flex-wrap gap-2">
              {allPossibleValues[key].map(value => {
                const isSelected = selected[key] === value;
                const isAvailable = availableOptions.includes(value);

                return (
                  <button
                    key={value}
                    onClick={() => handleSelect(key, value)}
                    disabled={!isAvailable}
                    className={`
                      px-3 py-1.5 text-sm rounded-md border
                      ${isSelected
                        ? 'bg-neutral-500 text-white border-neutral-500'
                        : 'bg-white text-gray-800 border-neutral-200'}
                      ${!isAvailable
                        ? 'opacity-50 cursor-not-allowed'
                        : ' hover:border-neutral-500'}
                    `}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductVariantSelector;