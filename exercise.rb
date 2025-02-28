class Exercise

  # Assume that "str" is a sequence of words separated by spaces.
  # Return a string in which every word in "str" that exceeds 4 characters is replaced with "marklar".
  # If the word being replaced has a capital first letter, it should instead be replaced with "Marklar".
  def self.marklar(str)
    # convert str to array and map through the words to modify #
    str.split(" ").map do |word|
      # get punctuation if it exists #
      punctuation = word[-1] =~ /[[:punct:]]/ ? word[-1] : ""
      # remove punctuation for processing #
      clean_word = punctuation.empty? ? word : word[0..-2]
  
      if clean_word.length > 4
        clean_word = clean_word[0] == clean_word[0].upcase ? "Marklar" : "marklar"
      end
  
      # append punctuation back #
      clean_word + punctuation
    end.join(" ")
  end

  # Return the sum of all even numbers in the Fibonacci sequence, up to
  # the "nth" term in the sequence
  # eg. the Fibonacci sequence up to 6 terms is (1, 1, 2, 3, 5, 8),
  # and the sum of its even numbers is (2 + 8) = 10
  def self.even_fibonacci(nth)
    # init Fibonacci sequence #
    fib = [1, 1]

    while fib.length < nth
      # generate next Fibonacci number #
      fib << fib[-1] + fib[-2]  
    end

    # sum even numbers in fib #
    fib.select(&:even?).sum 
  end
end
