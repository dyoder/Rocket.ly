require 'rubygems'

task :publish do
  
  require 'fog'

  s3 = YAML.load_file("s3.yml")
  
  # create a connection
  storage = Fog::Storage.new(
    :provider                 => 'AWS',
    :aws_secret_access_key    => 's3["secret-key"]',
    :aws_access_key_id        => 's3["key"]'
  )
  
  bucket = storage.directories.get("www.rocket.ly")

  Dir["_site/**/*.*"].each do |path|
    key = path.split("/")[4..-1].join("/")
    puts "Updating '#{key}'"
    file = bucket.files.get(key)
    file.body = File.open(path)
    file.save
  end
  
end
