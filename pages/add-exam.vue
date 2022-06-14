<template>
<div>
<div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Add a new Exam</h4>
                  <p class="card-description">
                     Please add Questions for exam
                  </p>
                  <form class="forms-sample">
                      <div>
                        <input type="date-time-local" class="form-control">
                        </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Question1</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Name">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail3">Options</label>
                       <no-ssr>
                            <vue-tags-input
                            v-model="tag"
                            :tags="tags"
                            @tags-changed="newTags => tags = newTags"
                            />
                        </no-ssr>
                      <select class="form-select" id="exampleInputEmail3">
                          <option>Option1</option>
                          <option>Option2</option>
                          <option>Option3</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">Gender</label>
                        <select class="form-control" id="exampleSelectGender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    <div class="form-group">
                      <label>File upload</label>
                      <input type="file" name="img[]" class="file-upload-default">
                      <div class="input-group col-xs-12">
                        <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image">
                        <span class="input-group-append">
                          <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCity1">City</label>
                      <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location">
                    </div>
                    <div class="form-group">
                      <label for="exampleTextarea1">Textarea</label>
                      <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
</div>
</template>
<script>
export default {

};
</script>