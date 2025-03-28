"use client"
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ReduxProvider from '@components/layouts/reduxProvider';
import { useSelector } from "react-redux";

const ProductVariantSelectorInner = ({
  variantsNames = {},
  variants = [],
  currentSpecs = {},
  currentProductId
}) => {
  const router = useRouter();
  const [selectedSpecs, setSelectedSpecs] = useState({ ...currentSpecs });
  const { specs } = useSelector((state) => state.refs);

  const allPossibleValues = useMemo(() => {
    return Object.keys(variantsNames).reduce((acc, key) => {
      acc[key] = [...new Set(variants.map(v => v.specs[key]))];
      return acc;
    }, {});
  }, [variants, variantsNames]);

  const availableOptions = useMemo(() => {
    const newAvailableOptions = {};

    Object.keys(variantsNames).forEach(key => {
      const activeFilters = { ...selectedSpecs };
      delete activeFilters[key];

      const availableVariants = variants.filter(variant =>
        Object.entries(activeFilters).every(([k, v]) =>
          v === null || variant.specs[k] === v
        )
      );

      newAvailableOptions[key] = [
        ...new Set(availableVariants.map(v => v.specs[key]))
      ];
    });

    return newAvailableOptions;
  }, [selectedSpecs, variants, variantsNames]);

  const findExactVariant = useCallback(() => {
    return variants.find(variant =>
      Object.entries(selectedSpecs).every(([k, v]) => variant.specs[k] === v)
    );
  }, [selectedSpecs, variants]);

  useEffect(() => {
    const exactVariant = findExactVariant();
    if (exactVariant && exactVariant.id !== currentProductId) {
      router.push(`/catalog/product/${exactVariant.id}`);
    }
  }, [selectedSpecs, currentProductId, router, findExactVariant]);

  useEffect(() => {
    setSelectedSpecs({ ...currentSpecs });
  }, [currentSpecs]);

  const handleSpecsChange = (key, value) => {
    setSelectedSpecs(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-4">
      {Object.entries(variantsNames).map(([key, label]) => (
        <div key={key} className="space-y-2">
          <h3 className="text-sm font-medium">{specs.find(item => item.slug === label)?.title?.ru || label}</h3>
          <div className="flex flex-wrap gap-2">
            {allPossibleValues[key]?.map(value => {
              const isSelected = selectedSpecs[key] === value;
              const isAvailable = availableOptions[key]?.includes(value);

              return (
                <button
                  key={value}
                  onClick={() => handleSpecsChange(key, value)}
                  disabled={!isAvailable}
                  className={`
                    px-3 py-1.5 text-sm rounded-md border transition-colors
                    ${isSelected
                      ? 'bg-neutral-800 text-white border-neutral-800'
                      : 'bg-white text-neutral-700 border-neutral-200'}
                    ${!isAvailable
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:border-neutral-800'}
                  `}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductVariantSelector = ({ variantsNames = {},
  variants = [],
  currentSpecs = {},
  currentProductId }) => {

  return (
    <ReduxProvider>
      <ProductVariantSelectorInner
        variantsNames={variantsNames}
        variants={variants}
        currentSpecs={currentSpecs}
        currentProductId={currentProductId}
      />
    </ReduxProvider>
  )
}

export default ProductVariantSelector;