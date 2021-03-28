require 'minitest/autorun'

class TestFriend < Minitest::Test
  def friend(friends)
    friends.select { |friend| friend.length == 4 }
  end

  def test_friend
    assert_equal(%w[Ryan Mark], friend(%w[Ryan Kieran Mark]))
    assert_equal(%w[Ryan], friend(%w[Ryan Jimmy 123 4 Cool\ Man]))
    assert_equal(%w[Jimm Cari aret], friend(%w[Jimm Cari aret truehdnviegkwgvke sixtyiscooooool]))
    assert_equal(%w[Love Your Face], friend(%w[Love Your Face 1]))
  end
end
