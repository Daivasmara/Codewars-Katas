require 'minitest/autorun'

class TestQueueTime < Minitest::Test
  def queue_time(customers, n)
    tills = Array.new(n, 0)
    customers.each { |customer| tills[tills.index(tills.min)] += customer }
    tills.max
  end

  def test_queue_time
    assert_equal(0, queue_time([], 1))
    assert_equal(5, queue_time([5], 1))
    assert_equal(2, queue_time([2], 5))
    assert_equal(15, queue_time([1, 2, 3, 4, 5], 1))
    assert_equal(5, queue_time([1, 2, 3, 4, 5], 100))
    assert_equal(9, queue_time([2, 2, 3, 3, 4, 4], 2))
  end
end
