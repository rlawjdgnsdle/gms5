<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" %> <!-- false로 돼있으면 세션이 돌아가지 않는다 -->
<html>
<head>
	<title>Home</title>
	<script src="${context}/resources/js/app.js"></script>
</head>
<body>
<h1>
	Hello world!
</h1>

<script>
	common.main('${context}');
</script>
</body>
</html>
