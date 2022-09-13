import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import PaginationElement from '@mui/material/Pagination';

interface Props<T> {
  data: T[];
  itemsPerPage: number;
}

const usePagination = <T,>({ data, itemsPerPage }: Props<T>) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const maxPage = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<T[]>([]);

  const getCurrentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    setCurrentData(data.slice(begin, end));
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(value);
  };

  useEffect(() => {
    getCurrentData();
  }, [currentPage]);

  const Pagination = () => (
    <PaginationElement
      count={maxPage}
      page={currentPage}
      color="primary"
      size={'medium'}
      onChange={handleChange}
      sx={{
        '& button': {
          fontSize: activeTheme.fontSize.l,
          color: activeTheme.fontColor,
        },
        '& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
          backgroundColor: activeTheme.fontColorAdditional200,
          color: activeTheme.primary,
        },
        '& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover': {
          backgroundColor: activeTheme.fontColorAdditional100,
        },
      }}
    />
  );

  return { currentData, currentPage, Pagination };
};

export default usePagination;
