import Utils
import Sorts

## Create bookshelf
bookshelf = Utils.load_books('books_small.csv')
bookshelf_v1 = bookshelf.copy()
bookshelf_v2 = bookshelf.copy()
long_bookshelf = Utils.load_books('books_large.csv')
long_bookshelf_v1 = long_bookshelf.copy() 
## Comparision functions
def by_title_ascending(book_a, book_b):
    return book_a['title_lower'] > book_b['title_lower']

def by_author_ascending(book_a, book_b):
    return book_a['author_lower'] > book_b['author_lower']

def by_total_length(book_a, book_b):
    return len(book_a['author_lower']) + len(book_a['title_lower']) > len(book_b['author_lower']) + len(book_b['title_lower'])
## Sorting by title ascending
sort_1 = Sorts.bubble_sort(bookshelf, by_title_ascending)

## Sorting by author ascending
sort_2 = Sorts.bubble_sort(bookshelf_v1, by_author_ascending)

## Sorting with quicksort function
Sorts.quicksort(bookshelf_v2, 0, len(bookshelf_v2) - 1, by_author_ascending)

## Sorting by total length
sort_3 = Sorts.bubble_sort(long_bookshelf, by_total_length)

## Quicksort by total length
Sorts.quicksort(long_bookshelf_v1, 0, len(long_bookshelf) - 1, by_total_length)
