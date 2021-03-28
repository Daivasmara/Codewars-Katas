require 'minitest/autorun'

class TestFilterList < Minitest::Test
  def filter_list(l)
    l.select { |el| el.is_a?(Integer) }
  end

  def test_filter_list
    assert_equal([1, 2], filter_list([1, 2, 'a', 'b']))
    assert_equal([1, 0, 15], filter_list([1, 'a', 'b', 0, 15]))
    assert_equal([1, 2, 123], filter_list([1, 2, 'aasf', '1', '123', 123]))
  end
end
