import usePagination from "../../../hooks/usePagination";
import styles from './Pagination.module.css';

export const Pagination = ({ totalPages, changePage, page }) => {
    const pageList = usePagination(totalPages);


    if (totalPages !== 1) {
        return (
            <div className={styles.pagination__container}>
                {
                    pageList.map(p => (
                        <div
                            className={p === page ?
                                [styles.pagination__item, styles.selected].join(' ')
                                : styles.pagination__item
                        }
                            key={p}
                            onClick={() => changePage(p)}>

                        </div>
                    ))
                }
            </div>
        )
    }
};