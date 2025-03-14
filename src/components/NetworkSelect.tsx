import React from 'react';
import Select, { StylesConfig } from 'react-select';
import Image from 'next/image';

interface NetworkOption {
  value: string;
  label: string;
  image: string;
}

interface NetworkSelectProps {
  onChange?: (value: NetworkOption) => void;
}

const customStyles: StylesConfig<NetworkOption, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1e1e1e',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
    borderRadius: '5px',
    padding: '5px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#2d2d2d' : '#1e1e1e',
    color: 'white',
    '&:hover': {
      backgroundColor: '#2d2d2d',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#1e1e1e',
    border: '1px solid #2d2d2d',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const NetworkSelect: React.FC<NetworkSelectProps> = ({ onChange }) => {
  const options: NetworkOption[] = [
    {
      value: 'kiteai-testnet',
      label: 'KiteAI Testnet',
      image: 'https://web-assets.same.dev/3469089677/1846198934.png'
    }
  ];

  const formatOptionLabel = (option: NetworkOption) => (
    <div className="select-dropdown">
      <Image src={option.image} alt="K" width={20} height={20} />
      {option.label}
    </div>
  );

  return (
    <Select
      styles={customStyles}
      options={options}
      defaultValue={options[0]}
      formatOptionLabel={formatOptionLabel}
      isSearchable={false}
      onChange={(option) => onChange && onChange(option as NetworkOption)}
    />
  );
};

export default NetworkSelect;
