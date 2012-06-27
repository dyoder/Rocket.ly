require 'rubygems'

task :publish do
  
  require 'fog'

  # create a connection
  storage = Fog::Storage.new(
    :provider                 => 'AWS',
    :aws_secret_access_key    => '72W4YjXAo3GtPZC+8R7DG4nh0uqAhONYFdmJkQeZ',
    :aws_access_key_id        => 'AKIAJVAOTCAX6CIY3UHQ'
  )
  
  bucket = storage.directories.get("www.rocket.ly")

  Dir["/Users/dan/Sites/**/*.*"].each do |path|
    key = path.split("/")[4..-1].join("/")
    puts "Updating '#{key}'"
    file = bucket.files.get(key)
    file.body = File.open(path)
    file.save
  end
  
end
