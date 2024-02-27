import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../contexts/actions/blogs";
import { View, Text } from "react-native";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <View>
      {blogs?.map((item) => {
        return <Text>{item?._id}</Text>;
      })}
    </View>
  );
};

export default Blogs;
