def count_down(i):
    print (i)
    if i <= 0:
        return i
    return count_down(i-1)


count_down(5)
