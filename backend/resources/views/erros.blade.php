@if (count($errors) > 0)
	<div class="alert alert-danger alert-dismissable fade in">
		<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		<ul>
	    @foreach ($errors->all() as $error)
	        <li style="list-style-type: square;"><b>{{ $error }}</b></li>
	    @endforeach
		</ul>
	</div>
@endif