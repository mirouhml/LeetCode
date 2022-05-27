# @param {Integer} x
# @return {Integer}
def reverse(x)
    reversed_num = 0
    negative = false
    if x < 0
        negative = true
        x *= -1
    end
    puts x
    while x > 0
        reversed_num = reversed_num * 10 + x % 10
        x = x / 10
    end
    reversed_num *= -1 if negative
    return 0 unless reversed_num <= 2**31 - 1 && reversed_num >= -2**31
    reversed_num
end